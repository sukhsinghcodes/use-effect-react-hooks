export default function subscribeEffect(source) {
  return () => {
    source.subscribe();

    return () => {
      source.unsubscribe();
    };
  };
}
