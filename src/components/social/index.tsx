import { ReactNode } from "react";

interface SocialProps {
    url: string;
    children: ReactNode;
}

export function Social({ url, children }: SocialProps) {

    return (
        <div>
            <a
                href={url}
                rel="noopener noreferrer"
                target="_blank"
                className="opacity-80 transition-opacity hover:opacity-100 duration-300"
            >
                {children}
            </a>
        </div>
    );
}