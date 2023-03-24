function History({history}) {
    return (
        <div className="mt-5 col-6 offset-3">
            <table className="table" id="history">
                <thead>
                <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Correct</th>
                    <th scope="col">Wrong</th>
                    <th scope="col">Total</th>
                </tr>
                </thead>
                <tbody>
                {history.map(record => (<tr key={record.date}>
                    <td><span>{record.date}</span></td>
                    <td><span className="text-success-emphasis">{record.correct}</span></td>
                    <td><span className="text-danger-emphasis">{record.incorrect}</span></td>
                    <td><span>{record.total}</span></td>
                </tr>))}
                </tbody>
            </table>
        </div>
    );
}

export default History;