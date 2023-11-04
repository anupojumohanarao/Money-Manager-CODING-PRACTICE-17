import './index.css'

const TransactionItem = props => {
  const {transactionDetails, deleteTransaction} = props
  const {id, title, amount, type} = transactionDetails

  const onClickDeleteButton = () => {
    deleteTransaction(id)
  }

  return (
    <li className="main-transaction-container">
      <p className="details">{title}</p>
      <p className="details">Rs {amount}</p>
      <p className="details">{type}</p>
      <div className="button-section">
        <button
          className="delete-button"
          data-testid="delete"
          onClick={onClickDeleteButton}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
