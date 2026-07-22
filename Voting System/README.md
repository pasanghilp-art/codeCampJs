The big idea

A Map holds your options as keys. Each key's value is a Set of voter IDs — not a number. Counting votes just means checking .size of that Set.
Why a Set and not just a counter?
A plain number (votes = votes + 1) can't tell who already voted — it would just keep incrementing forever, letting one person vote infinite times. A Set remembers identity: trying to add the same voterId twice does nothing, since Sets reject duplicates automatically. That's the one piece of cleverness the whole project hinges on.



The three functions, one-line summaries

addOption → creates an empty bucket (Set) for a new option name
vote → tries to drop a voterId into that bucket; Set's duplicate-rejection naturally blocks repeat votes
displayResults → walks through every bucket, reports its size



The pattern you'll see again and again

Map.has() / Set.has() → "does this exist?"
Map.set() / Set.add() → "put this in"
Map.get() → "give me the value for this key"
This same has/set/get/add vocabulary shows up constantly in JS, so it's worth it sticking with you.