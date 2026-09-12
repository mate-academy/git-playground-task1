renamed some logs
renamed add function: the new name is "adding", but in the list I call it "added" as a stray change

🚩 Flags

1. Line 33 is definitely a bug — deleting a note will print "Added note #X" which is misleading
2. Line 9's "adding" case doesn't match typical CLI conventions (should probably be "add")
3. Help text on line 38 doesn't match the command case

Is this intentional (part of the lesson exercise)? Or should I fix these before committing?


Yes, it caught the stray change