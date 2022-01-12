import React from 'react'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import './ContactStyles.css'

export const Contact = () => {
    return (
        <div className='contact'>
            <div className='container'>
                <div className='col-1'>
                    <div className='content'>
                        <div><h2 className='gradient__head'>Get in touch</h2>
                            <p className='gradient__head' style={{padding:'0.2rem'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam,
                            iusto natus fugit saepe minima rem nemo laborum ea dolorum
                                est.</p>
                        </div>
                        <div className='gradient__head' style={{paddingTop:'1rem'}}>
                            <p>742 Evergreen Terrace</p>
                            <p>Springfield, OR 12345</p>
                        </div>
                        <div className='gradient__head'>
                            <FaPhone style={{marginRight: '1rem'}} />
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className='gradient__head'>
                            <FaEnvelope style={{marginRight: '1rem'}} />
                            <p>support@example.com</p>
                        </div>
                        <div className='gradient__text' style={{paddingTop:'0.2rem'}}>
                            <p>Looking for careers? <span className='gradient__light' style={{marginLeft:'0.3rem'}}>View all jop openings.</span></p>
                        </div>
                    </div>
                </div>
                <div className='col-2'>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact


