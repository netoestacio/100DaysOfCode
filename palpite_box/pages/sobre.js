import React from 'react'
import Link from 'next/Link'

const Sobre = () => {
    return(
        <div>
            <h1>Pagina Sobre</h1>
            <div>
                <Link href='/'>
                    <a>Home</a>
                </Link>
            </div>
        </div>
    )
}

export default Sobre