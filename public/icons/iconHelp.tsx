export interface IconHelpProps {
    color?: string
}

export const IconHelp = (props: Partial<IconHelpProps>) => {
    const {color} = props
    return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22.9288C17.5228 22.9288 22 18.442 22 12.9073C22 7.37254 17.5228 2.88574 12 2.88574C6.47715 2.88574 2 7.37254 2 12.9073C2 18.442 6.47715 22.9288 12 22.9288Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.08997 9.90089C9.32507 9.23111 9.78912 8.66634 10.3999 8.30659C11.0107 7.94684 11.7289 7.81534 12.4271 7.93537C13.1254 8.0554 13.7588 8.41922 14.215 8.9624C14.6713 9.50557 14.921 10.193 14.92 10.903C14.92 12.9074 11.92 13.9095 11.92 13.9095" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 17.918H12.01" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

}

