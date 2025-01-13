import Image from 'next/image'
import { getLatestImage } from '../actions/getLatestImage'
import ErrorMessage from './ErrorMessage'

export default async function ImageDisplay() {
    const result = await getLatestImage()

    return (
        <div className="border rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-4">Processed Image</h2>
            {typeof result === 'string' ? (
                <Image
                    src={result}
                    alt="Processed image"
                    width={500}
                    height={300}
                    className="w-full h-auto object-contain"
                />
            ) : result?.error ? (
                <ErrorMessage message={`Error: ${result.error}`} />
            ) : (
                <ErrorMessage message="No image processed yet or unable to fetch image." />
            )}
        </div>
    )
}

