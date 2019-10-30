import React, { Component } from 'react';
import dl from './dulieu.json';
import NewsRelated from './NewsRelated.js';
class NewDetail extends Component {
    render() {
        var dem=0;
        // console.log(this.props.match.params.id);
        return (
            <div>
                <header className="masthead tintuc">
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="header-content mx-auto">
                        <h1 className="mb-1">Chi tiet</h1>
                        </div>
                    </div>
                    </div>
                </header>
                {/* begin tintuc */}
                {
                    dl.map((value,key)=> {
                        if(value.id=== parseInt(this.props.match.params.id)){
                            return (
                                <div className="jumbotron jumbotron-fluid" key={key}>
                                    <div className="container">
                                    <img src={value.anh} className="img-fluid rong100" alt="" />
                                    <h3 className="lead text-center">{value.tieuDe}</h3>
                                    <hr className="my-2" />
                                        {value.noiDung}</div>
                                </div>
                            )

                        }
                        else return;
                        
                    })
                }
                
                <div className="container">
                    <h4 className="card-title text-center">Tin lien quan</h4>
                    <div className="row">
                    <div className="col-12">
                        <div className="card-deck">
                        {
                            
                            dl.map((value,key) => {
                                if(value.id !== parseInt(this.props.match.params.id,20)){
                                    
                                    dem++;
                                    if(dem<=4){
                                        return (
                                        <NewsRelated key={key}
                                                    tinId={value.id}
                                                    anh={value.anh}
                                                    tieuDe={value.tieuDe}
                                                    tacGia={value.tacGia}
                                        ></NewsRelated>
                                    )
                                }
                                }
                                else 
                                    return;
                                
                            })
                        }
                        </div>
                    </div>
                    </div>
                </div>
                {/* end-tintuc */}
            </div>

        );
    }
}

export default NewDetail;