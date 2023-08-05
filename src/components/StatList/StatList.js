export function StatList({data}) {
    const stats = data.map(({ id, label, percentage }) =>
    <li key={id}>
            <span>{label}</span>
            <span>{percentage}%</span>
    </li>
    )
    
    return (
        <ul>
            {stats}
        </ul>
    );
}