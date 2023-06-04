
type Props = {
    onClick: (event: React.MouseEvent<HTMLElement>) => void
};
export default function Button({ onClick }: Props) {
    return (
        <div onClick={onClick} >Button</div>
    )
}
