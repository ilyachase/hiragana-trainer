function History({history}) {
    return (
        <div className="mt-5 col-4 offset-4">
            <table className="table" id="history">
                <thead>
                <tr>
                    <th scope="col">Answer</th>
                    <th scope="col">Correct</th>
                </tr>
                </thead>
                <tbody>
                {history.map((record, index) => (<tr key={index}>
                    <td><span className={record.isCorrect ? 'text-success-emphasis' : 'text-danger-emphasis'}>{record.actual}</span></td>
                    <td>{record.expected}</td>
                </tr>))}
                </tbody>
            </table>
        </div>
    );
}

export default History;