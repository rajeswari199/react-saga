import React from 'react'
import { connect } from 'react-redux'
import { getCurrency } from '../actions'

class Currency extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currency: '' };
        this.props = { data: { currency: { rates: { IDR: { rate: ''} } } } };
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.props.currency();

    }

    render() {
        console.log('props', this.props.currency)
        return (
            <div>
                {this.props.data.currency && <h2>currency = {JSON.stringify(this.props.data.currency.rates)}</h2>}
                <form className="App" onSubmit={this.onSubmit}>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (data) => ({ data: data })
const mapDispatchToProps = dispatch => {
    return {
        currency: () => { dispatch(getCurrency()) }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Currency)
