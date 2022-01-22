import { Component } from 'react'

export default class ClassComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }

    // shouldComponentUpdate(prevState, currentState) {
    //     if (prevState.count !== currentState.count) {
    //         return true; // не перерисовывает
    //     }
    //     return false;
    // }

    render() {
        const app = document.querySelector('#app')
        console.log(app)

        return (
            <div>
                <p>{this.state.count}</p>
                <button
                    onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        )
    }

    callback(event) {
        if (event.code === 'Enter') {
            alert('You pressed Enter')
        }
    }

    async fetchPosts() {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const posts = await response.json()

        // console.log(posts)
    }

    async componentDidUpdate(prevProps) {
        console.log('did updated', this.props.refetch)
        if (prevProps.refetch !== this.props.refetch) {
            this.fetchPosts()
        }
    }

    async componentDidMount() {
        document.addEventListener('keydown', this.callback)
        this.fetchPosts()
        const app = document.querySelector('#app')
        console.log(app)
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.callback)

        // console.log('unmounted')
    }
}