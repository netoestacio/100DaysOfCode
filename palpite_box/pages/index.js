import React from 'react'
import Link from 'next/link'

const Index = () => {
    return (
        <div>
            <h1>Olá seja bem-vindo ao Sistema</h1>
            <div>
                <Link href='/sobre'>
                    <a>Sobre</a>
                </Link>
            </div>
            <div>
                <Link href='/contatos'>
                    <a>Contatos</a>
                </Link>
            </div>
        </div>
    )
}

export default Index