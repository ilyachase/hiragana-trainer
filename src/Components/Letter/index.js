function Letter({id}) {
    return (
        <div className="mb-3">
            <img src={'./Hiragana/' + id + '.svg'} width="450px" title={id} className="img-thumbnail"/>
        </div>
    );
}

export default Letter;