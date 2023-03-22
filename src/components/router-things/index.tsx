// router.asPath appears to be  the current URL.. on home page  it is just '/'
//
import { useRouter } from 'next/router'

function ActiveLink({ children, href }) {

const router = useRouter()
const style = {
marginRight: 10,
color: router.asPath === href ? 'red' : 'black',
}

const handleClick = (e) => {
e.preventDefault()
router.push(href)
}

console.log(router.asPath);

return (
<div>
<a href={href} onClick={handleClick} style={style}>
    {children}
    </a>
    <button type="button" onClick={() => router.push('/about')}>
    onClick router.push
    </button>
    {/* If there existed a dynamic route like  pages/post/[pid].js */}
    <button type="button" onClick={() => router.push('/post/abc')}>
    onClick router.push dynamic route [pid].js example </button>

</div>
)
}

export default ActiveLink