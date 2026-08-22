function Home(props) {
    console.log(props.mycars);
    return (
        <section>
            {props.mycars.map((data, index) => {
                return <main key={index}>
                    <h2>{data.companyName}</h2>
                    <img src={data.img} alt=""></img>
                    <h3>{data.model}</h3>
                    <p>{data.category}</p>
                    <p>{data.price}</p>
                </main>
            })}

        </section>
    )
}

export default Home;