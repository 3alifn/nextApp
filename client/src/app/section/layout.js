export default function PageLayout({children, header, footer}){
    return (
     <div>
         {header}
         {children}
         {footer}
     </div>
    )
}