import jacket from "../assets/images/jacket.png"

function Category({img,title}){
    return(
        <div>
            <div className="bg-[#f5f0f0] h-[80px] w-[80px] p-[10px] rounded-full"><img src={img} alt="" /></div>
        <p className="flex justify-center"> {title}</p></div>
    )
}
export default Category