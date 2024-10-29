'use client'

import { useState, useEffect, useRef } from 'react';
import { ArrowLeft} from 'lucide-react';
import { useRouter } from 'next/router';
import CountdownTimer from '@/components/TimerCountdown';

export default function Component() {
    const router = useRouter();
    const [otp, setOtp] = useState(new Array(6).fill(''));
    const [phoneNumber, setPhoneNumber] = useState('');
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]); // Updated type definition

    useEffect(() => {
        if (router.query.phone) {
            setPhoneNumber(decodeURIComponent(router.query.phone as string));
        }
    }, [router.query]);

    const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === 'Backspace') {
            // If current input is empty and we're not at the first input, move to previous
            if (otp[index] === '' && index > 0) {
                inputRefs.current[index - 1]?.focus();
            }
            // Clear current input and update OTP state
            const newOtp = [...otp];
            newOtp[index] = '';
            setOtp(newOtp);
        }
    };

    const handleInput = (index: number, value: string) => {
        // Handle pasted content
        if (value.length > 1) {
            const pastedValues = value.slice(0, 6).split('').map(char => 
                !isNaN(Number(char)) ? char : ''
            );
            
            const newOtp = [...otp];
            pastedValues.forEach((digit, i) => {
                if (index + i < 6) {
                    newOtp[index + i] = digit;
                }
            });
            setOtp(newOtp);

            // Focus the next empty input or the last input
            const nextEmptyIndex = newOtp.findIndex((digit, i) => i > index && digit === '');
            if (nextEmptyIndex !== -1) {
                inputRefs.current[nextEmptyIndex].focus();
            } else {
                inputRefs.current[5].focus();
            }
            return;
        }

        // Handle single character input
        const newOtp = [...otp];
        if (value === '' || (!isNaN(Number(value)) && value.length === 1)) {
            newOtp[index] = value;
            setOtp(newOtp);

            // Automatically move to the next input
            if (value !== '' && index < 5) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const isOtpComplete = () => {
        return otp.every(digit => digit !== '');
    };

    const handleSubmit = () => {
        const otpString = otp.join('');
        console.log('Submitting OTP:', otpString);
        router.push({
            pathname: '/registration/regist',
            query: { phone: phoneNumber }
        });
    };

    return (
        <div className="min-h-screen bg-background text-white pt-4 flex flex-col">
            <div className="bg-white text-black rounded-t-3xl flex-grow p-6 flex flex-col">
                <div className="flex items-center mb-6">
                    <ArrowLeft className="w-6 h-6 mr-4" />
                    <h1 className="text-xl font-semibold">Verifikasi Kode OTP</h1>
                </div>

                <p className="mb-2">
                    Masukkan 6 digit kode yang sudah dikirim ke nomor kamu dibawah ini ya!
                </p>
                <p className="text-red-500 mb-6">
                    {phoneNumber || 'No phone number provided'}
                </p>

                <div className="flex justify-between mb-6">
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={el => inputRefs.current[index] = el} // Set the ref
                            type="text"
                            value={digit}
                            onChange={(e) => handleInput(index, e.target.value)}
                            onKeyDown={(e) => handleBackspace(e, index)}
                            className="w-12 h-12 border-b-2 border-gray-300 text-center text-2xl"
                            maxLength={1}
                            autoFocus={index === 0} // Automatically focus the first input
                        />
                    ))}
                </div>

                {isOtpComplete() && (
                    <button
                        onClick={handleSubmit}
                        className="w-full bg-red-600 text-white py-3 rounded-lg mb-6 hover:bg-red-800 transition-colors"
                    >
                        Submit
                    </button>
                )}

                <p className="text-center mb-2">Tidak terima kode?</p>
                <div className="text-center mb-6">
                    <span>Kirim kode kembali dalam </span>
                    <CountdownTimer />
                </div>
            </div>
        </div>
    );
}