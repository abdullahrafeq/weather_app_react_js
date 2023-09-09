function DetailItem(title, value) {
    return (
        <li>
            <p className="value" id="high">
                {value}
            </p>
            <p className="description">
                {title}
            </p>
        </li>
    );
}

export default DetailItem;