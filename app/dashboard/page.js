export const metadata = {
  title: "Dashboard Page",
  description: "Dashboard Page is here",
};
import Dashboard from '@/components/Dashboard'
import React from 'react'

const page = () => {
  return (
    <div>
        <Dashboard/>
    </div>
  )
}

export default page