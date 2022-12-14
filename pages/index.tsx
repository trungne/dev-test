import Header from 'components/Header'
import SearchArea from 'components/SearchArea'
import Instruction from 'components/Instruction'

import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import Head from 'next/head'

import vehicleTypeJSON from 'components/SearchArea/vehicle-type.json'
import AskSection from 'components/AskSection'
import Footer from 'components/Footer'
import About from 'components/About'

import { carAPI } from 'store/carapi.slice'
import CarList from 'components/CarList'
import { CarInfo, FeaturedVehicle } from 'shared/types'

import { wrapper } from 'store/store'
import carDataJSON from 'server/car.json'
import featuredVehicleJSON from 'server/featured-vehicle.json'
import Feature from 'components/Feature'
import { detectMobile } from 'shared/utils'
import { setIsMobile } from 'store/app.slice'

type ServerSideProps = {
  vehicleTypes: Record<string, string>,
  carData: CarInfo[],
  featuredVehicles: FeaturedVehicle[]
}

export const getServerSideProps: GetServerSideProps<ServerSideProps> = wrapper.getServerSideProps(store => async ({ req }) => {
  // await store.dispatch(carAPI.endpoints.getCarInfo.initiate())
  // await store.dispatch(carAPI.endpoints.getFeaturedVehicles.initiate())
  if (req.headers['user-agent']) {
    store.dispatch(setIsMobile(detectMobile(req.headers['user-agent'])))
  }

  return {
    props: {
      vehicleTypes: vehicleTypeJSON,
      carData: carDataJSON,
      featuredVehicles: featuredVehicleJSON
    },
  }
})


const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ vehicleTypes, carData, featuredVehicles }) => {

  return (
    <>
      <Head>
        <title>UCar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <SearchArea vehicleTypes={vehicleTypes} />
        <CarList carData={carData} />
        <Instruction />
        <Feature featuredVehicles={featuredVehicles} />
        <AskSection />
        <About />
      </main>

      <Footer />

    </>
  )
}

export default Home
