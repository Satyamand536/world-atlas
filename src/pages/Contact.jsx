export const Contact=()=>{
    const handleFormSubmit=(formData)=>{
        console.log(formData.entries());
        const formInputData=Object.fromEntries(formData.entries());
        console.log(formInputData);
    }
    return (    <section className="section-contact">
        <h2 className="container-title">Conatct Us</h2>
        <div className="contact-wrapper container">
        <form action={handleFormSubmit}>
            <input type="text" required autoComplete="false"
            placeholder="Enter your name" className="form-control"
            name="username"/>

            <input type="email" required autoComplete="false"
            placeholder="Enter your email-id" className="form-control"
            name="email"/>

            <textarea rows="10" name="" className="form-control" placeholder="Enter your message" required autoComplete="off" ></textarea>
            <button type="submit" className="btn btn-darken" value="send">Send</button>
        </form>
        </div>
    </section>
    )
}