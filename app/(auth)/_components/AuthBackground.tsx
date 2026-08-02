export default function AuthBackground(): React.ReactNode {
    return (
      <>
        {/* light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />
        {/* cells */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255_255_255/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255_255_255/0.05)_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        {/* planets */}
        <div className="absolute w-150 h-150 bg-blue-950/40 rounded-full -top-37.5 -left-50 shadow" />
        <div className="absolute w-150 h-150 bg-lime-950/40 rounded-full -bottom-50 right-35 shadow" />
      </>
    );
}
