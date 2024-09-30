import BreakPointWrap from "../../breakpointwrap"

const AsSeen = () => {
    const  AsSeenList = [
        {
            alt: 'as-seen-1',
            img: 'https://cdn.shopify.com/s/files/1/0726/1221/7115/files/br-p1.png?v=1685960073&ecom-need-replace'
        },
        {
            alt: 'as-seen-1',
            img: 'https://cdn.shopify.com/s/files/1/0726/1221/7115/files/br-p2.png?v=1685960090&ecom-need-replace'
        },
        {
            alt: 'as-seen-1',
            img: 'https://cdn.shopify.com/s/files/1/0726/1221/7115/files/br-p3.png?v=1685960110&ecom-need-replace'
        },
        {
            alt: 'as-seen-1',
            img: 'https://cdn.shopify.com/s/files/1/0726/1221/7115/files/br-p4.png?v=1685960126&ecom-need-replace'
        },
    ]
  return (
    <div className="py-14">
        <BreakPointWrap>
            <div>
                <h3 className="text-3xl text-center">AS SEEN IN</h3>
                <div className="grid grid-cols-4 mt-14 gap-14">
                    {
                        AsSeenList.map((item, index) => (
                            <div key={index} className="flex justify-center items-center">
                                <img src={item.img} alt={item.alt} className="w-[80%]" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </BreakPointWrap>
    </div>
  )
}

export default AsSeen