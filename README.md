## jest-udemy

# FIRST principles
principle, not rules, that we may follow when writing tests:
1. fast
2. independent
3. repeatable
4. self-validating
5. thorough

Fast
    unit tests shuld be fast
    faster test - faster feedback
Isolated/independent
    test should be isolated from:
        other test
        external environment
            no shared state with other tests
            the order in which tests run should not matter
            contradiction with the Fast principle:
                individual test take more time to setup
Repeatable:
    same result with the same input:
        challenge: random/date values - we will often mock these
    exmaple: test that writes to database:
        it should always clean up
    in contradiction with the fast principle
        more setup and teardown operation
Self validating
    after the test is finished, it's result should be clear:
        pass/fail
Thorough
    cover all the cases/paths/scenarios
        hard to think at all of them from the beginning
    happy cases, bad paths, edge cases
    invalid output
    large values
    100% code coverage - not a great indicator

test properties:
    only, skip, todo, concurrent
test aliases:
    it, test, xit, fit
watch mode

Test doubles in Jest
> stubs
> fakes
> mocks
> spies
> mocking modules