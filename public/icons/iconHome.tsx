export interface IconHomeProps {
    color?: string
}

export const IconHome = (props: Partial<IconHomeProps>) => {
    const {color} = props
    return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 9.12495L12 2.10986L21 9.12495V20.1487C21 20.6802 20.7893 21.19 20.4142 21.5659C20.0391 21.9418 19.5304 22.153 19 22.153H5C4.46957 22.153 3.96086 21.9418 3.58579 21.5659C3.21071 21.19 3 20.6802 3 20.1487V9.12495Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 22.1529V12.1313H15V22.1529" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

}