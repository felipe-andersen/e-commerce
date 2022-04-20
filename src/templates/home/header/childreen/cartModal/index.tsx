
import { CartType } from "../..";
import { CartIcon } from "../../../../../libs/icons/cart";
import { FullScreen } from "../../../../../libs/icons/fullScreen";


export interface CartModalComponentProtocol {
    editPerson: boolean
    setPerson: any;
    cart: CartType;
};

const CartModalComponent = ( porps:CartModalComponentProtocol ) => {
   
    const { editPerson, setPerson, cart } = porps;

    let data = {
        'ptBR': {
            edit: "Editar",
            send: "Enviar",
            inputSearch: {
                title: "Entre com uma palavra ou uma frase",
                alt: "Entre com uma palavra ou uma frase",
                placeholder: "Busque um produto"
            }
        },
        'en': {
            amount: "Amount",
            subtotal: "Subtotal",
            edit: "Edit",
            send: "Send",
            favorite: "Favorite",
            cart: 'Cart',
            price: "Price",
            product: "Product",
            increment: "Increment",
            decrement: "Decrement",
            total: "Total",
            adress: "Adress",
            view: 'View',
            remove: "Remove",
            addName: "Add name",
            inputSearch: {
                title: "Enter a word or phrase",
                alt: "Enter a word or phrase",
                placeholder: "Search for a product"
            }
        }
    };

    return (
        <span    className="cartModal"    id="cartModal">
            <section    className="cart"    id="cart">
                <div className="menu" id="menu">
                    <span    className="icon-sectionTitle"   id="icon-sectionTitle">
                        <i    className="iconContainer"   id="iconContainer">
                            <CartIcon/>
                        </i>
                        <span    className="sectionTitle"   id="sectionTitle">
                            {data['en'].cart}
                        </span>
                        <button    className="fullScreen"   id="fullScreen">
                            <FullScreen/>
                        </button>
                    </span>
                </div>
                <div    className="itemsView"   id="itemsView" title={""}>
                    {
                        cart.map(item => (
                            <div   className="item"   id="item"    title={"item"}>
                                <span   className=""   id="">
                                    <span    className="description"    id="description">
                                        <img    className="item"     alt={""}     id="item"/>
                                        <div    title={"any product fjjglzkfsdjlg .sjflkgjslfkgkg"}>
                                            { item.product.descriptionName }
                                        </div>
                                    </span>
                                    <div    className="price"   id="price"    title="price">
                                        { item.product.priceUn_R$ }
                                    </div>
                                </span>
                                <span    className="address"   id="address" title="Adress or person">
                                    {
                                        editPerson === true ? editPerson &&
                                            <input    type="text"    placeholder={"Digite um nome ou um endereço"}    value={undefined}/>
                                            :   
                                            <div title="Adress or person">
                                                { item.person }
                                            </div>
                                    } 
                                    <span    className="view-remove-edit"    id="productBtns">
                                        <button    style={{display:  `${  editPerson === false ? "flex" : "none"  }`}}>
                                            { data["en"].view }
                                        </button>
                                        <button    style={{display:`${editPerson === false ? "flex" : "none"}`}}>
                                            { data["en"].remove }
                                        </button>
                                        {
                                            item.person === "" ?  
                                                <button    style={{display:`${editPerson === false ? "flex" : "none"}`}}    onClick={() => editPerson === false ? setPerson(true) : setPerson(false)}>
                                                    Add name
                                                </button> 
                                                : 
                                                <button    title={editPerson === false ? "Edit" : "Send"}    onClick={() => editPerson === false ? setPerson(true) : setPerson(false)}>
                                                    { editPerson === false ? data["en"].edit : data["en"].send }
                                                </button>
                                        }
                                    </span>
                                </span>
                            </div>
                        ))
                    }
                </div>
            </section>
        </span>
    )
};

export default CartModalComponent