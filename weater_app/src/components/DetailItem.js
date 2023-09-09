function DetailItem(title, value) {
    return (
        <li>
            <p class="value" id="high">
                {value}
            </p>
            <p class="description">
                {title}
            </p>
        </li>
    );
}