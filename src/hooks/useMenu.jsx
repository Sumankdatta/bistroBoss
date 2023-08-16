import { useQuery } from "@tanstack/react-query";


const useMenu = () => {

    const { data: menu = [], isLoading: loading, refetch } = useQuery({
        queryKey: [],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/menu')
            const data = await res.json()
            return data
        }
    })
    return [menu, loading, refetch]




    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true)
    // console.log(menu)

    // useEffect(() => {
    //     fetch('http://localhost:5000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data)
    //             setLoading(false)
    //         })
    // }, [])
    // return [menu, loading]
}

export default useMenu;