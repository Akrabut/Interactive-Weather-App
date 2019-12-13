export function handleChange(value, setValue) {
  value === 'home'
    ? setValue('favorites')
    : setValue('home')
}