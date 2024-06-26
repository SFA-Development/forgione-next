import Link from 'next/link'
import React from 'react'

interface Props {
    title: string,
    href: string
}

const CalloutButton = ({title, href} : Props) => {
  return (
    <Link href={href} className="inline-block bg-black text-white rounded-lg my-4 px-5 py-4 font-bold text-xl hover:bg-white hover:text-black hover:scale-110 transition-all duration-150 shadow">
        {title}
    </Link>
  )
}

export default CalloutButton