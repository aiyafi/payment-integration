// src/pages/registration/index.tsx
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import InputNumber from '@/components/InputNumber';
import { useRouter } from 'next/navigation';


const RegistrationPage: React.FC = () => {
    const router = useRouter();

    const handleNumberSubmit = (number: string) => {
        // Use router.push to navigate and pass query parameters
        router.push(`/registration/otpVerification?phone=${encodeURIComponent(number)}`);
    };

    return (
        <div className="min-h-screen bg-background text-white pt-4 flex flex-col">
            {/* Main Content */}
            <div className="bg-white text-black rounded-t-3xl flex-grow p-6">
                <div className="flex items-center mb-6">
                    <ArrowLeft className="w-6 h-6 mr-4" />
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

                <h2 className="text-2xl font-bold text-center mb-4">Selamat Datang</h2>

                <p className="text-xs mb-6">
                    Ekspresikan perjalananmu menggunakan LRT Pay
                </p>

                <div className="mb-6">
                    <label htmlFor="phone" className="text-xs block mb-2 font-semibold">
                        Nomor Telepon
                    </label>
                    <InputNumber onSubmit={handleNumberSubmit} placeholder="Masukkan Nomor Telepon" />
                </div>

                <p className="text-sm mb-4">
                    Seluruh transaksi aman, dengan melanjutkan proses ini. Menu{' '}
                    <span className="text-red-500">syarat & ketentuan</span> yang berlaku
                </p>

                {/* Footer */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center">
                    <span className="text-xs mr-2">Powered by BANK DKI</span>
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
    );
};

export default RegistrationPage;