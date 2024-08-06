<script lang='ts'>
  import { GTM } from 'views/mols'

  let { children } = $props()
</script>


{ @render children() }

<ul>
  <li><a href='/'>Главная</a></li>
  <li><a href='/o-kompanii'>О компании</a></li>
  <li><a href='/ekspertiza'>Экспертиза</a></li>
  <li><a href='/uslugi-otsenki'>Оценка</a></li>
</ul>

<GTM />
