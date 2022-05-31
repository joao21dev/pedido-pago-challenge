import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Employees from '../components/employeesTable/EmployeesTable'

const Home: NextPage = () => {
  return (
   <Employees />
  )
}

export default Home
