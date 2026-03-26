

import { ReactNode } from 'react';

const Main = ({ children }: { children: ReactNode }) => {
    return (
        <main className="bg-gray-light w-full min-h-screen h-full pb-[70px]">
            {children}
        </main>
    )
}

export default Main