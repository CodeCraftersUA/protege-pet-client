type LogoProps = {
    logo: any
    width: string,
    height: string
}

export function Logo({logo, width, height}: LogoProps){

    return (
        <img style={
            {
                width: width,
                height: height
        }} src={logo} alt="Logo"/>
    )
}