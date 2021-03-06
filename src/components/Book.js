import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Book extends Component {

    render() {
        const { book, onShelfChange } = this.props
        const noThumbLink = "https://books.google.com/googlebooks/images/no_cover_thumb.gif"

        return(
            <div className="book">
                <div className="book-top">
                    <div 
                        className="book-cover" 
                        style={{ 
                            width: 128, 
                            height: 193, 
                            backgroundImage: `url(${
                                book.imageLinks ? book.imageLinks.thumbnail : noThumbLink
                            })`}}>                        
                    </div>
                    <div className="book-shelf-changer">
                        <select 
                            onChange={e => onShelfChange(book, e.target.value)}
                            value={book.shelf ? book.shelf : ''}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title ? book.title : null}</div>
                <div className="book-authors">{book.authors ? book.authors.join(',') : null}</div>
            </div>
        )
    }
}

Book.propType = {
    book: PropTypes.object.isRequired,
    onShelfChange: PropTypes.func
}

export default Book