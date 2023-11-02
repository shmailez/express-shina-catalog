import { useCallback} from "react";
import DocumentMeta from "react-document-meta";
import { Link, useNavigate, useParams } from "react-router-dom";


const slugCategory = (data, slug) => {
    for (let category of data) {
        if (category.slug === slug) {
            return category;
        }
        if (category.children) {
            const found = slugCategory(category.children, slug);
            if (found) return found;
        } 
    }   
};


const Catalog = ({data}) => {

    const { slug } = useParams();
    
    const category = slug ? 
    slugCategory(data, slug) : 
    {name: 'Каталог', children: data, index: false};
    const navigate = useNavigate();


    const handleBack = useCallback(() => {
        navigate(-1);
    }, [navigate]);

    const metaIndex = {
        name: {
            robots: "index"
        }
    }

    const metaNoIndex = {
        name: {
            robots: "noindex"
        }
    }

    return(
        <div>
            {category?.index ? <DocumentMeta {...metaIndex}/> :  <DocumentMeta {...metaNoIndex}/>}
            <h1>{category.name}</h1>
            <ul>
                {
                slug ?  <button onClick={handleBack}>
                    Назад
                </button> : ''
                }
                {
                    category?.children?.map((children) => (
                            <li key={children.id}>
                                <Link
                                    to={`/${children.slug}`}
                                >
                                      {children.name}
                                </Link>
                            </li>
                        ))
                }   
            </ul>
                {
                    slug ?  <span>Вскоре тут что-нибудь появится</span> : ''
                }
        </div>
    )
}

export default Catalog