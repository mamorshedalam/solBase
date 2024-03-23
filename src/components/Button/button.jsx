export default function Button({ children, classes, ...rest }) {
     return (<button className={`bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 py-2.5 px-6 rounded-lg font-semibold hover:text-white ${classes}`} {...rest}>{children}</button>)
}