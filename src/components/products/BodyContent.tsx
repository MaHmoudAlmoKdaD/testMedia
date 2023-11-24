import axios from "axios"
import Cards from "./Cards"
import Filter from "./Filter"
import { useEffect, useState } from 'react'

type Props = {}

const BodyContent = (props: Props) => {

    const [data, setData] = useState([])
    const [limitProducts, setLimitProducts] = useState([]);
    const [categories, setCategories] = useState([])
    const [companies, setCompanies] = useState([])
    const [colors, setColors] = useState([])

    // states for searching
    const [searchCategory, setSearchCategory] = useState('')
    const [searchPrice, setSearchPrice] = useState<any>(null)
    const [searchColor, setSearchColor] = useState('')
    const [searchCompany, setSearchCompany] = useState("")
    const [searchName, setSearchName] = useState("")
    const [freeShopping, setFreeShopping] = useState(false)

    //get data from api
    useEffect(() => {
        axios.get('https://course-api.com/react-store-products')
            .then((res) => {
                console.log(res.data)
                setData(res.data)
                setLimitProducts(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    // get Categories
    useEffect(() => {
        if (data.length > 0) {
            getCategories()
            getCompanies()
            getColors()
        }

    }, [limitProducts])

    /**
  * filtering by name, company,... of the product
  * with applying the functionality
  */
    useEffect(() => {
        if (searchCategory || searchPrice || searchColor || searchCompany || searchName) {
            setData(
                limitProducts.filter((product: any) => {
                    let verdict = true;
                    if (searchName) {
                        verdict =
                            verdict &&
                            product?.name.toLowerCase().includes(searchName.toLowerCase());
                    }
                    if (searchPrice > 0) {
                        verdict =
                            verdict &&
                            product?.price <= searchPrice
                    }
                    if (searchCategory) {
                        if (searchCategory == "All") {
                            verdict = verdict && true
                        } else {
                            verdict = verdict && product?.category == searchCategory;
                        }
                    }
                    if (searchCompany) {
                        if (searchCompany == "All") {
                            verdict = verdict && true
                        } else {
                            verdict = verdict && product?.company == searchCompany;
                        }
                    }
                    if (freeShopping) {
                        verdict = verdict &&
                            product?.shipping == freeShopping

                    }
                    if (searchColor) {
                        if (searchColor == 'All') {
                            verdict = true
                        } else {
                            verdict =
                                verdict &&
                                product?.colors?.includes(searchColor)
                        }

                    }
                    return verdict;
                })
            );
        } else {
            setData(limitProducts);
        }
    }, [searchCategory, searchPrice, searchColor, searchCompany, searchName, freeShopping]);

    const getCategories = () => {
        const categories: any = data.map((d: any) => {
            return d?.category
        })

        // create unique array 
        const uniqueArray: any = [];
        categories.forEach((item: any) => {
            if (!uniqueArray.includes(item)) {
                uniqueArray.push(item);
            }
        });
        setCategories(uniqueArray)
    }

    const getCompanies = () => {
        const companies: any = data.map((c: any) => {
            return c?.company
        })

        // create unique array 
        const uniqueArray: any = [];
        companies.forEach((item: any) => {
            if (!uniqueArray.includes(item)) {
                uniqueArray.push(item);
            }
        });
        setCompanies(uniqueArray)
    }

    const getColors = () => {
        const colors: any = []
        for (let index = 0; index < data.length; index++) {
            const element: any = data[index];
            for (let index1 = 0; index1 < element?.colors?.length; index1++) {
                const color = element?.colors?.[index1];
                colors.push(color)

            }
        }

        // create unique array 
        const uniqueArray: any = [];
        colors.forEach((item: any) => {
            if (!uniqueArray.includes(item)) {
                uniqueArray.push(item);
            }
        });
        setColors(uniqueArray)
    }

    const sortByF = (value: any) => {
        let sortedProducts: any;
        if (value == 'highest') {
            sortedProducts = data.slice().sort((a: any, b: any) => a.price - b.price);
            setData(sortedProducts)
        }else{
            sortedProducts = data.slice().sort((a: any, b: any) => b.price - a.price);
            setData(sortedProducts)
        }
    }

    return (
        <div className="container mx-auto px-4 mt-10">
            <div className="block lg:flex ">
                <Filter
                    categories={categories}
                    companies={companies}
                    colors={colors}
                    setSearchCategory={setSearchCategory}
                    setSearchPrice={setSearchPrice}
                    setSearchColor={setSearchColor}
                    setSearchCompany={setSearchCompany}
                    setSearchName={setSearchName}
                    setFreeShopping={setFreeShopping}
                />

                <Cards data={data} sortByF={sortByF} />
            </div>
        </div>
    )
}

export default BodyContent