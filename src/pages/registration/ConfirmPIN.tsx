'use client'

import { useState } from 'react'
import { ArrowLeft, Shield } from 'lucide-react'
import Image from 'next/image'

export default function Component() {
    const [pin, setPin] = useState(['', '', '', '', '', ''])

    // Add this function to check if all PIN digits are filled
    const isPinComplete = () => {
        return pin.every(digit => digit !== '')
    }

    const handlePinChange = (index: number, value: string) => {
        if (value.length <= 1 && !isNaN(Number(value))) {
            const newPin = [...pin]
            newPin[index] = value
            setPin(newPin)

            // Move focus to the next input
            if (value !== '' && index < 5) {
                const nextinput = document.getElementById(`pin-${index + 1}`)
                nextinput?.focus()
            }
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-600 via-orange-500 to-yellow-500 text-white pt-4 flex flex-col">
            {/* Main Content */}
            <div className="bg-white text-black rounded-t-3xl flex-grow p-6 flex flex-col items-center">
                <div className="flex items-center self-start mb-6">
                    <ArrowLeft className="w-6 h-6 mr-4 text-red-500" />
                    <h1 className="text-xl font-semibold">LRT X JakOne Pay</h1>
                </div>

                <div className="flex justify-center mb-6">
                    <Image
                        src="/placeholder.svg"
                        alt="LRT Jakarta Logo"
                        width={150}
                        height={75}
                        className="max-w-[150px]"
                    />
                </div>

                <h2 className="text-2xl font-bold mb-6">Buat PIN kamu!</h2>

                <div className="flex justify-between w-full max-w-xs mb-8">
                    {pin.map((digit, index) => (
                        <input
                            key={index}
                            id={`pin-${index}`}
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={1}
                            value={digit}
                            onChange={(e) => handlePinChange(index, e.target.value)}
                            className="w-12 h-12 text-center text-2xl border-2 border-red-500 rounded-md"
                        />
                    ))}
                </div>

                {/* Add this button section */}
                {isPinComplete() && (
                    <button 
                        className="w-full max-w-xs bg-red-500 text-white py-3 rounded-lg font-semibold mb-8"
                        onClick={() => {
                            // Add your submit logic here
                            console.log('PIN submitted:', pin.join(''))
                        }}
                    >
                        Submit
                    </button>
                )}

                <div className="flex flex-col items-center mb-8">
                    <p className="text-center text-sm">
                        Konfirmasi PIN kamu!
                    </p>
                </div>

                <div className="flex items-center mt-auto">
                    <span className="text-xs mr-2">Powered by</span>
                    <Image
                        src="/placeholder.svg"
                        alt="Bank DKI Logo"
                        width={80}
                        height={20}
                        className="max-w-[80px]"
                    />
                </div>
            </div>
        </div>
    )
}