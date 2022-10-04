import Header from 'components/Header'
import SearchArea from 'components/SearchArea'
import Instruction from 'components/Instruction'
import CarList from 'components/CarList'

import type { NextPage } from 'next'
import Head from 'next/head'
import { GetStaticProps, InferGetStaticPropsType } from 'next'
import dynamic from 'next/dynamic'

import vehicleTypeJSON from 'components/SearchArea/vehicle-type.json'
import defaultCarData from 'server/car.json'
import { CarInfo } from 'shared/types'
import AskSection from 'components/AskSection'
import Footer from 'components/Footer'

type StaticProps = {
  vehicleTypes: Record<string, string>,
  defaultCarData: CarInfo[]
}
export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  return {
    props: {
      vehicleTypes: vehicleTypeJSON,
      defaultCarData: defaultCarData,
    },
  }
}

const DynamicFeaturedVehicle = dynamic(() => import('components/Feature'), { ssr: false })

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ vehicleTypes, defaultCarData }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <SearchArea vehicleTypes={vehicleTypes} />
        <CarList defaultCarData={defaultCarData} />
        <Instruction />
        <DynamicFeaturedVehicle />
        <AskSection />
      </main>

      <Footer />

    </div>
  )
}

export default Home
