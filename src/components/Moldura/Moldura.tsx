
type MolduraProps = {
    value: string
    children: React.ReactNode
}

export function Moldura({value, children} : MolduraProps){
    return(
        <div style={{boxShadow: value }}>
            {children}
        </div>
    )
}