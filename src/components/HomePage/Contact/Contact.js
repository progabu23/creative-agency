import React from 'react';

const Contact = () => {
    return (
        <section className="mt-5 pt-5 pb-2" style={{ backgroundColor: '#FBD062', }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-5">
                        <h2>Lets handle your project, professionally</h2>
                        <p className="text-dark pt-2">With well written codes, we build amazing apps for all platforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-7 pb-3">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Your Email Address" />
                            </div>
                            <div className="form-group">
                                <input name="name" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" cols="30" rows="10" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn px-5 mt-2 text-white bg-dark"> Submit </button>
                            </div>
                        </form>
                    </div>                   
                </div>
            </div>
            <p className="text-center" style={{color: '#535c68'}}>copyright Orange labs {new Date().getFullYear()}</p>
        </section>
    );
};

export default Contact;