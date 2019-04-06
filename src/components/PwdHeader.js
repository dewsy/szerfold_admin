import React, {Component} from 'react';
import cookie from 'react-cookies'


export class PwdHeader extends Component  {

    state = {
        pwd: ''
    };

    componentWillMount() {
        this.setState({pwd: cookie.load('pwd')});
    }

    loginOnSubmit = (e) => {
        e.preventDefault();
        cookie.save('pwd', this.state.pwd, {path: '/'});
        this.setState({'pwd': e.target.value})
    };


    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    logOutOnSubmit = () => {
        cookie.remove('pwd');
        this.setState({pwd: ''});
    };

    render() {
        if (cookie.load('pwd') === undefined) {
            return (
                <form onSubmit={this.loginOnSubmit}>
                    <input type={'password'} name={'pwd'} placeholder={"ide jon a jelszo"}
                           value={this.state.pwd}
                           onChange={this.onChange}
                    />
                    <input type={'submit'} value={'Mentes'}/>
                </form>
            )
        } else {
            return (
                <form onSubmit={this.logOutOnSubmit}>
                    <input type={'submit'} value={'Kijelentkezes'}/>
                </form>
            )
        }
    }

}

export default PwdHeader;