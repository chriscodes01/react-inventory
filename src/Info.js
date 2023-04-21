import React from "react"
import { PropTypes } from "prop-types"

class Info extends React.Component {
    constructor(props) {
      super(props);
      console.log(props);
    }

    render() {
        const title = this.props.title;
        // const showTitle = false;
    
        return (
            <div>
              <h1>{ title }</h1>
              <p>Manage your stuff.</p>
            </div>
          )
    }
}

Info.defaultProps = {
  title: "Title"
}

Info.propTypes = {
  title: PropTypes.string
}

  export default Info