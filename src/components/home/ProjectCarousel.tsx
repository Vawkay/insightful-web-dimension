
// Fix the TypeScript error with the onSelect handler
const onSelect = (e: React.SyntheticEvent<HTMLDivElement, Event>) => {
  if (e.target instanceof HTMLDivElement && e.target.parentElement instanceof HTMLDivElement) {
    const emblaApi = emblaRef.current?.emblaApi;
    if (emblaApi) {
      setActiveIndex(emblaApi.selectedScrollSnap());
    }
  }
};
