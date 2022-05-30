export interface IconBillingProps {
    color?: string
}

export const IconBilling = (props: Partial<IconBillingProps>) => {
    const {color} = props
    return <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 4.65723H3C1.89543 4.65723 1 5.55459 1 6.66154V18.6874C1 19.7943 1.89543 20.6917 3 20.6917H21C22.1046 20.6917 23 19.7943 23 18.6874V6.66154C23 5.55459 22.1046 4.65723 21 4.65723Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 10.6699H23" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

}

