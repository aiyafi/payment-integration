import { ArrowLeft } from 'lucide-react'
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Component() {
    const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        // Only allow numbers
        const numericValue = value.replace(/[^\d]/g, '');
        // Update the input value directly
        event.target.value = numericValue;
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-600 via-orange-500 to-yellow-500 text-white pt-4 flex flex-col">
            {/* Main Content */}
            <div className="bg-white text-black rounded-t-3xl flex-grow p-6 flex flex-col">
                <div className="flex items-center mb-6">
                    <ArrowLeft className="w-6 h-6 mr-4 text-red-500" />
                    <h1 className="text-xl font-semibold">LRT X JakOne Pay</h1>
                </div>

                <div className="flex justify-center mb-6">
                    <Image
                        src="/placeholder.svg"
                        alt="LRT Jakarta Logo"
                        width={200}
                        height={100}
                        className="max-w-[200px]"
                    />
                </div>

                <form className="space-y-6 flex-grow">
                    <input
                        type="tel"
                        placeholder="Nomor telepon/handphone"
                        pattern="[0-9]*"
                        inputMode="numeric"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                        onChange={handlePhoneInput}
                    />
                    <input
                        type="text"
                        placeholder="Nama"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                    />
                    <input
                        type="date"
                        placeholder="Tanggal Lahir"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                    />
                    <input
                        type="text"
                        placeholder="Tempat Lahir"
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:outline-none transition-all"
                    />
                </form>

                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg mt-6">
                    Daftar
                </button>

                <div className="flex justify-center items-center mt-6">
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
